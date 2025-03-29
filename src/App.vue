<template>
  <div class="container">
    <!-- 侧边栏 -->
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <button class="toggle-btn" @click="toggleSidebar">
        {{ isCollapsed ? '☰' : '×' }}
      </button>

      <div class="sidebar-inner">
        <div class="menu-header">
          <h2 v-show="!isCollapsed">知识库导航</h2>
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

// 响应式状态
const isCollapsed = ref(false)
const currentItem = ref(null)
const randomCount = ref(3)
const randomItems = ref([])

// 菜单数据
const menuData = reactive([
  {
    id: 'frontend',
    name: '前端技术',
    expanded: true,
    children: [
      { id: 'vue3', name: 'Vue3', contentId: 'vueContent' },
      { id: 'react', name: 'React', contentId: 'reactContent' }
    ]
  },
  {
    id: 'backend',
    name: '后端技术',
    expanded: false,
    children: [
      { id: 'nodejs', name: 'Node.js', contentId: 'nodeContent' }
    ]
  }
])

// 内容数据
const contentMap = reactive({
  vueContent: {
    id: 'vueContent',
    title: 'Vue3 核心特性',
    image: '/images/vue.jpg',
    content: [
      '组合式 API - 更好的逻辑复用',
      '响应式系统 - 基于Proxy实现',
      'TypeScript 支持 - 更好的类型推导'
    ]
  },
  reactContent: {
    id: 'reactContent',
    title: 'React 核心特性',
    image: '/images/react.jpg',
    content: [
      '函数组件 - 使用Hooks管理状态',
      '虚拟DOM - 高效的渲染机制',
      '单向数据流 - 可预测的状态管理'
    ]
  },
  nodeContent: {
    id: 'nodeContent',
    title: 'Node.js 基础',
    image: '/images/node.jpg',
    content: [
      '事件循环 - 非阻塞I/O模型',
      '模块系统 - CommonJS规范',
      '异步编程 - Promise/Async语法'
    ]
  }
})

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

<style scoped>
/* 基础布局 */
.container {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
}

/* 侧边栏样式 */
.sidebar {
  width: 280px;
  min-width: 280px;
  height: 100vh;
  background: #2d3848;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  z-index: 100;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

.sidebar-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 切换按钮 */
.toggle-btn {
  position: absolute;
  right: -48px;
  top: 20px;
  width: 40px;
  height: 40px;
  background: #2d3848;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;
}

.toggle-btn:hover {
  background: #3a4658;
}

/* 主内容区 */
.main-content {
  flex: 1;
  min-height: 100vh;
  padding: 2rem;
  margin-left: 280px;
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
}

.sidebar.collapsed + .main-content {
  margin-left: 0;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
}

/* 内容卡片 */
.content-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  padding: 2.5rem;
  margin: 0 auto;
  max-width: 800px;
}

.content-header h1 {
  color: #1a202c;
  font-size: 2.2rem;
  margin: 0 0 2rem;
  font-weight: 600;
}

.content-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.content-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  padding: 1.2rem;
  margin: 1rem 0;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #4299e1;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.empty-illustration img {
  max-width: 300px;
  margin: 0 auto 2rem;
}

.empty-text {
  color: #718096;
  font-size: 1.2rem;
}

/* 导航菜单样式 */
.nav-menu {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.category-title {
  color: #cbd5e0;
  padding: 14px;
  margin: 8px 0;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-title:hover {
  background: rgba(255,255,255,0.1);
}

.sub-items {
  padding-left: 1rem;
  margin: 0.5rem 0;
}

.sub-item {
  color: #a0aec0;
  padding: 12px;
  margin: 4px 0;
  border-radius: 6px;
  transition: all 0.2s;
}

.sub-item.active {
  background: rgba(66, 153, 225, 0.1);
  color: #4299e1;
}

/* 随机推荐 */
.sidebar-footer {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.5rem;
  background: #252f3f;
}

.random-control {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.count-input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  border-radius: 6px;
  padding: 8px;
}

.generate-btn {
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  transition: all 0.2s;
}

.random-item {
  background: rgba(255,255,255,0.05);
  color: #cbd5e0;
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  margin: 4px;
  font-size: 0.9rem;
}

.random-item.active {
  background: #4299e1;
  color: white;
}
</style>