<template>
  <div class="status-cards">
    <div 
      v-for="(card, index) in cards" 
      :key="index" 
      class="status-card"
      :class="`card-${index + 1}`"
    >
      <span class="status-icon">{{ card.icon }}</span>
      <p>{{ card.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusCards',
  data() {
    return {
      cards: [
        { icon: '⚡', text: 'Building projects with Vue.js and Node.js' },
        { icon: '📚', text: 'Learning advanced JavaScript concepts' },
        { icon: '🌟', text: 'Contributing to open-source projects' }
      ]
    }
  }
}
</script>

<style scoped>
.status-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.status-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.status-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.status-card.card-2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.status-card.card-3 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.status-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .status-cards {
    grid-template-columns: 1fr;
  }
}
</style>