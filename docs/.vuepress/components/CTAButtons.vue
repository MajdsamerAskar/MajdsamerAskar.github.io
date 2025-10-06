<template>
  <div class="cta-buttons">
    <a 
      v-for="(button, index) in buttons" 
      :key="index"
      :href="button.link" 
      :class="['cta-btn', button.type]"
    >
      {{ button.icon }} {{ button.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'CTAButtons',
  data() {
    return {
      buttons: [
        { icon: '📄', text: 'View My Resume', link: '/about/', type: 'primary' },
        { icon: '🚀', text: 'See My Projects', link: '/projects/', type: 'secondary' },
        { icon: '💬', text: 'Get In Touch', link: '/contact/', type: 'secondary' }
      ]
    }
  }
}
</script>

<style scoped>
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.cta-btn {
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-btn.primary {
  background: linear-gradient(135deg, #3eaf7c, #42b983);
  color: white;
}

.cta-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(62, 175, 124, 0.4);
}

.cta-btn.secondary {
  background: white;
  color: #3eaf7c;
  border: 2px solid #3eaf7c;
}

.cta-btn.secondary:hover {
  background: #3eaf7c;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(62, 175, 124, 0.3);
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>