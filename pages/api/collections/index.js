const collectins = [
    {
        name: 'Pine Apple',
        img: 'https://i.ibb.co/b5ZSTdm/Rectangle-1275-13.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'Yellow fruits',
        group: 'fresh fruit',
        sku: 'fgf-1'
    },
    {
        name: 'Apple',
        img: 'https://i.ibb.co/3WF5Rs3/Rectangle-1275-12.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green fruits',
        group: 'fresh fruit',
        sku: 'fgf-2'
    },
    {
        name: 'Product Name',
        img: 'https://i.ibb.co/G0s6cqD/Rectangle-1275-11.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'white fruits',
        group: 'fresh fruit',
        sku: 'fgf-3'
    },
    {
        name: 'Lychee',
        img: 'https://i.ibb.co/Cvt8T59/Rectangle-1275-10.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'white fruits',
        group: 'fresh fruit',
        sku: 'fgf-4'
    },
    {
        name: 'Mango',
        img: 'https://i.ibb.co/p47gfW8/Rectangle-1275-9.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'yellow fruits',
        group: 'fresh fruit',
        sku: 'fgf-5'
    },
    {
        name: 'Watermelon',
        img: 'https://i.ibb.co/PNc4Z2T/Rectangle-1275-8.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green fruits',
        group: 'red fruit',
        sku: 'fgf-6'
    },
    {
        name: 'Dragon Fruit',
        img: 'https://i.ibb.co/dpVrV8S/Rectangle-1275-7.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'red fruits',
        group: 'fresh fruit',
        sku: 'fgf-7'
    },
    {
        name: 'Guyava',
        img: 'https://i.ibb.co/pK1Q89j/Rectangle-1275-6.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green fruits',
        group: 'fresh fruit',
        sku: 'fgf-8'
    },
    {
        name: 'Capsicum',
        img: 'https://i.ibb.co/pwykb11/Rectangle-1275-5.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green fruits',
        group: 'fresh fruit',
        sku: 'fgf-9'
    },
    {
        name: 'Beef',
        img: 'https://i.ibb.co/ym2QrSj/Rectangle-1275-4.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'Meat',
        subCategory: 'Red Meat',
        group: 'Beef',
        sku: 'fgf-10'
    },
    {
        name: 'Papaya',
        img: 'https://i.ibb.co/qCsRhd0/Rectangle-1275-3.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'yellow fruits',
        group: 'fresh fruit',
        sku: 'fgf-11'
    },
    {
        name: 'Product Name',
        img: 'https://i.ibb.co/zrYhbzC/Rectangle-1275-2.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green fruits',
        group: 'fresh fruit',
        sku: 'fgf-13'
    },
    {
        name: 'Red Orange',
        img: 'https://i.ibb.co/6FSSWFq/Rectangle-1275-1.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'red fruits',
        group: 'fresh fruit',
        sku: 'fgf-14'
    },
    {
        name: 'Promegranate',
        img: 'https://i.ibb.co/PF7rHGT/Rectangle-1275.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'red fruits',
        group: 'fresh fruit',
        sku: 'fgf-15'
    },
]

export default function handler(req, res) {
    res.status(200).json(collectins)
}