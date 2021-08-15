const price = document.querySelector('#price')

const types = [
    {
        type: 'basic',
        annualy: '19.99',
        monthly: '199.99'
    },
    {
        type: 'pro',
        annualy: '24.99',
        monthly: '249.99'
    },
    {
        type: 'master',
        annualy: '39.99',
        monthly: '399.99'
    }
]

price.addEventListener('click', () => {
    if(price.checked) {
        types.forEach(type => {
            const el = document.querySelector(`[data-type="${type.type}"`)
            el.textContent = type.monthly
        })
    } else {
        types.forEach(type => {
            const el = document.querySelector(`[data-type="${type.type}"`)
            el.textContent = type.annualy
        })
    }
})