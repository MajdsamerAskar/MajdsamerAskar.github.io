<template>
  <div class="tech-stack">
    <h3>💻 Technologies I Use</h3>
    <div class="tech-badges">
      <span 
        v-for="(tech, index) in technologies" 
        :key="index"
        class="tech-badge"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  data() {
    return {
      technologies: ['JavaScript', 'Python', 'Vue.js', 'Node.js', 'Git']
    }
  }
}
</script>

<style scoped>
.tech-stack {
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.tech-badge {
  background: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  color: #2c3e50;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.tech-badge:hover {
  transform: translateY(-5px) rotate(2deg);
  box-shadow: 0 8px 20px rgba(62, 175, 124, 0.3);
  background: #3eaf7c;
  color: white;
}
</style>