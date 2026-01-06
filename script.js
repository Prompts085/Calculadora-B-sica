const display = document.getElementById('display')

function numero(n) {
  limparSeErro()
  display.value += n
}

function operador(op) {
  limparSeErro()
  const valor = display.value

  if (valor === '') return

  // remove espaços do fim
  const ultimo = valor.trim().slice(-1)

  if (['+', '-', '*', '/'].includes(ultimo)) {
    display.value = valor.trim().slice(0, -1) + op + ' '
  } else {
    display.value += ` ${op} `
  }
}

function normalizar() {
  display.value = display.value.replace(/\s+/g, ' ')
}


function limpar() {
  display.value = ''
}

function limparSeErro() {
  if (display.value === 'Erro' || display.value === 'NaN') {
    display.value = ''
  }
}


function apagar() {
  limparSeErro()
  display.value = display.value.slice(0, -1)
}


function calcular() {
  try {
    normalizar()
    const resultado = eval(display.value)

    if (!isFinite(resultado)) {
      display.value = 'Erro'
      return
    }

    display.value = resultado
  } catch {
    display.value = 'Erro'
  }
}


function porcentagem() {
  limparSeErro()
  display.value = eval(display.value) / 100
}

function raiz() {
  limparSeErro()
  if (display.value === '') return

  const v = eval(display.value)
  if (v < 0) {
    display.value = 'Erro'
    return
  }

  display.value = Math.sqrt(v)
}


function quadrado() {
  limparSeErro()
  const v = eval(display.value)
  display.value = v * v
}

function inverso() {
  limparSeErro()
  display.value = 1 / eval(display.value)
}

function parentese(p) {
  limparSeErro()
  const texto = display.value
  const ultimo = texto.slice(-1)

  const abre = (texto.match(/\(/g) || []).length
  const fecha = (texto.match(/\)/g) || []).length

  if (texto === '' && p === ')') return

  if (p === '(' && ultimo === ')') return

  if (p === ')' && fecha >= abre) return

  display.value += p
}


