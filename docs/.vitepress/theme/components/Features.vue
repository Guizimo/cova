<script setup>
const features = {
  title: 'Loved by the Community',
  subtitle: 'See what our users have to say about Cova',
  items: [
    {
      avatar: '/avatars/user1.jpg',
      name: 'Sarah Chen',
      role: 'UI Designer',
      content: '作为设计师，这个工具让我的工作效率提升了很多。'
    },
    {
      avatar: '/avatars/user2.jpg',
      name: 'Mike Johnson',
      role: 'Content Creator',
      content: '简单易用，生成的封面质量非常高。'
    },
    {
      avatar: '/avatars/user3.jpg',
      name: 'Lisa Wang',
      role: 'Developer',
      content: '完美集成到我的工作流程中，节省了大量时间。'
    }
  ]
};
</script>

<template>
  <div class="features">
    <h2 class="title">{{ features.title }}</h2>
    <p class="subtitle">{{ features.subtitle }}</p>
    <div class="items">
      <div v-for="item in features.items" :key="item.name" class="item">
        <img :src="item.avatar" :alt="item.name" class="avatar" />
        <h3 class="name">{{ item.name }}</h3>
        <p class="role">{{ item.role }}</p>
        <p class="content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: var(--vp-c-bg);
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 4rem;
}

.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1152px;
  margin: 0 auto;
}

.item {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s;
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.role {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.content {
  line-height: 1.6;
}
</style>
