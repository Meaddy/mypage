<template>
  <div class="container">
    <!-- 侧边栏 -->
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <button class="toggle-btn" @click="toggleSidebar">
        {{ isCollapsed ? '☰' : '×' }}
      </button>

      <div class="sidebar-inner">
        <div class="menu-header">
          <h2 v-show="!isCollapsed" style="color: white; font-weight: bold;">
            车万蒸蒸日上 乐园交通ver
          </h2>
        </div>

        <!-- 导航菜单 -->
        <nav class="nav-menu">
          <div 
            v-for="category in menuData" 
            :key="category.id"
            class="category-group"
          >
            <div 
              class="category-title"
              @click="toggleCategory(category)"
              v-show="!isCollapsed"
            >
              <span class="title">{{ category.name }}</span>
              <span class="arrow">{{ category.expanded ? '▾' : '▸' }}</span>
            </div>

            <transition name="slide">
              <ul
                v-if="category.children.length"
                v-show="category.expanded && !isCollapsed"
                class="sub-items"
              >
                <li
                  v-for="item in category.children"
                  :key="item.id"
                  class="sub-item"
                  @click="selectItem(item)"
                  :class="{ active: currentItemId === item.contentId }"
                >
                  <span class="bullet">•</span>
                  {{ item.name }}
                </li>
              </ul>
            </transition>
          </div>
        </nav>

        <!-- 随机推荐 -->
        <div class="sidebar-footer" v-show="!isCollapsed">
          <div class="random-control">
            <input
              type="number"
              v-model.number="randomCount"
              min="1"
              :max="maxItems"
              class="count-input"
              placeholder="数量"
            >
            <button @click="generateRandom" class="generate-btn">
              <span class="shuffle-icon">🎲</span>
              <span>随机推荐</span>
            </button>
          </div>
          <div class="random-results">
            <button
              v-for="item in randomItems"
              :key="item.id"
              @click="selectItem(item)"
              class="random-item"
              :class="{ active: currentItemId === item.contentId }"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </aside>

    <!-- 主内容区 -->
    <main class="main-content">
      <div class="content-wrapper">
        <template v-if="currentItem">
          <article class="content-card">
            <header class="content-header">
              <h1>{{ currentItem.title }}</h1>
            </header>
            <div class="content-body">
              <img 
                v-if="currentItem.image" 
                :src="currentItem.image" 
                class="content-image"
              >
              <div 
                v-for="(text, index) in currentItem.content"
                :key="index"
                class="content-text"
              >
                {{ text }}
              </div>
            </div>
          </article>
        </template>
        <div v-else class="empty-state">
          <div class="empty-illustration">
            <img src="./pic/no.png" alt="空状态">
          </div>
          <p class="empty-text">请从左侧选择条目</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import menudata from './uitls/menudata.js'
import charadata from './uitls/charadata.js'
import './uitls/style.css'

// 响应式状态
const isCollapsed = ref(false)
const currentItem = ref(null)
const randomCount = ref(3)
const randomItems = ref([])

// 菜单数据
const menuData = reactive(menudata)
// 内容数据
const contentMap = reactive(charadata)

// 计算属性
const allMenuItems = computed(() => 
  menuData.flatMap(category => category.children))
const maxItems = computed(() => allMenuItems.value.length)
const currentItemId = computed(() => currentItem.value?.id)

// 方法
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const toggleCategory = (category) => {
  category.expanded = !category.expanded
}

const selectItem = (menuItem) => {
  currentItem.value = contentMap[menuItem.contentId]
  const parentCategory = menuData.find(c => 
    c.children.some(item => item.id === menuItem.id))
  if (parentCategory) parentCategory.expanded = true
}

const generateRandom = () => {
  const pool = [...allMenuItems.value]
  const results = []
  while (results.length < randomCount.value && pool.length) {
    const index = Math.floor(Math.random() * pool.length)
    results.push(pool.splice(index, 1)[0])
  }
  randomItems.value = results
}
</script>
