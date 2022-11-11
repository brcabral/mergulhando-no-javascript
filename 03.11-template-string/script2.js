const name = 'Lucas'
const age = 32

// O template string permite pular linha e mantém a formatação.
const html1 = `
      <ul>
        <li>
          ${name}
        </li>
        <li>
          ${age}
        </li>
      </ul>
    `

// Por concatenação, é preciso colocar o sinal \ para indicar o final da linha e não mantém a formatação
const html2 = ' \
    <ul>\
      <li>\
        ${name}\
      </li>\
      <li>\
        ${age}\
      </li>\
    </ul>\
  '

console.log('html1: ' + html1)
console.log('html2: ' + html2)
