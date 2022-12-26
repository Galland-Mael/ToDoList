<template>
  <div class="context flex">
    <div class="calculator-container">
      <div class="label-container gray flex">
        <label id="result">{{ result }}</label>
      </div>
      <div class="calculator">

        <div class="flex">
          <div id="AC" class="field gray flex" @click.prevent="reset">
            <div class="center flex">
              <p class="text">AC</p>
            </div>
          </div>
          <div id="oposite" class="field gray flex" @click.prevent="oposite">
            <div class="center flex">
              <p class="text">+/-</p>
            </div>
          </div>
          <div id="percent" class="field gray flex" @click.prevent="percent">
            <div class="center flex">
              <p class="text">%</p>
            </div>
          </div>
          <div id="divide" class="field orange flex" @click.prevent="divide">
            <div class="center flex">
              <p class="text">/</p>
            </div>
          </div>
        </div>

        <div class="flex">
          <div id="seven" class="field gray flex" @click.prevent="addNumber('7')">
            <div class="center flex">
              <p class="text">7</p>
            </div>
          </div>
          <div id="height" class="field gray flex" @click.prevent="addNumber('8')">
            <div class="center flex">
              <p class="text">8</p>
            </div>
          </div>
          <div id="nine" class="field gray flex" @click.prevent="addNumber('9')">
            <div class="center flex">
              <p class="text">9</p>
            </div>
          </div>
          <div id="multiply" class="field orange flex" @click.prevent="multiply">
            <div class="center flex">
              <p class="text">x</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div id="four" class="field gray flex" @click.prevent="addNumber('4')">
            <div class="center flex">
              <p class="text">4</p>
            </div>
          </div>
          <div id="five" class="field gray flex" @click.prevent="addNumber('5')">
            <div class="center flex">
              <p class="text">5</p>
            </div>
          </div>
          <div id="six" class="field gray flex" @click.prevent="addNumber('6')">
            <div class="center flex">
              <p class="text">6</p>
            </div>
          </div>
          <div id="minus" class="field orange flex" @click.prevent="minus">
            <div class="center flex">
              <p class="text">-</p>
            </div>
          </div>
        </div>

        <div class="flex">
          <div id="one" class="field gray flex" @click.prevent="addNumber('1')">
            <div class="center flex">
              <p class="text">1</p>
            </div>
          </div>
          <div id="two" class="field gray flex" @click.prevent="addNumber('2')">
            <div class="center flex">
              <p class="text">2</p>
            </div>
          </div>
          <div id="three" class="field gray flex" @click.prevent="addNumber('3')">
            <div class="center flex">
              <p class="text">3</p>
            </div>
          </div>
          <div id="plus" class="field orange flex" @click.prevent="plus">
            <div class="center flex">
              <p class="text">+</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div id="zero" class="double gray flex">
            <div class="center flex">
              <p class="text">0</p>
            </div>
          </div>
          <div id="dot" class="field gray flex" @click.prevent="addNumber('.')">
            <div class="center flex">
              <p class="text">.</p>
            </div>
          </div>
          <div id="equal" class="field orange flex" @click.prevent="equal">
            <div class="center flex">
              <p class="text">=</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculatorComponent',
  data () {
    return {
      result: '0',
      stock: '0',
      type: ''
    }
  },
  methods: {
    addNumber (number) {
      if (this.result === '0') {
        if (number === '0') {
          return
        } else {
          this.result = ''
        }
      }
      this.result += number
    },
    reset () {
      this.result = '0'
    },
    oposite () {
      if (this.result > '0') {
        this.result = -Math.abs(this.result)
      } else if (this.result < '0') {
        this.result = Math.abs(this.result)
      }
    },
    plus () {
      this.type = 'plus'
      this.stock = this.result
      this.result = '0'
    },
    minus () {
      this.type = 'minus'
      this.stock = this.result
      this.result = '0'
    },
    divide () {
      this.type = 'divide'
      this.stock = this.result
      this.result = '0'
    },
    multiply () {
      this.type = 'multiply'
      this.stock = this.result
      this.result = '0'
    },
    equal () {
      if (this.type === 'plus') {
        this.result = parseFloat(this.result) + parseFloat(this.stock)
      } else if (this.type === 'minus') {
        this.result = parseFloat(this.result) - parseFloat(this.stock)
      } else if (this.type === 'multiply') {
        this.result = parseFloat(this.result) * parseFloat(this.stock)
      } else if (this.type === 'divide') {
        this.result = parseFloat(this.stock) / parseFloat(this.result)
      }
      this.type = ''
    },
    percent () {
      this.result = this.result / 100
    }
  }

}
</script>

<style scoped>
@import "/src/CSS/calculator.css";
</style>
