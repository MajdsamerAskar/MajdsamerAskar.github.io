<template>
  <div class="typing-container">
    <span class="typing-effect">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
export default {
  name: 'TypingEffect',
  props: {
    text: {
      type: String,
      default: "Hi, I'm Majd Samer, a software developer based in Erbil, Iraq."
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      displayText: '',
      currentIndex: 0
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.text.length) {
        this.displayText += this.text.charAt(this.currentIndex)
        this.currentIndex++
        setTimeout(this.typeText, this.speed)
      }
    }
  }
}
</script>

<style scoped>
.typing-container {
  display: inline-block;
  font-size: 1.2rem;
  margin: 1rem 0;
}

.typing-effect {
  font-weight: 500;
}

.cursor {
  color: #3eaf7c;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>