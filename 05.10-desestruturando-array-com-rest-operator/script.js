const fruits = ['banana', 'morango', 'manga', 'kiwi', 'maracuja']
const [firstItem, secondItem, ...otherItems] = fruits

console.log(`firstItem: ${firstItem}`)
console.log(`secondItem: ${secondItem}`)
console.log(`otherItems: ${otherItems}`)
