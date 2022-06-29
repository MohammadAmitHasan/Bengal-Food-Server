const collectins = [
    {
        name: 'Pine Apple',
        img: 'https://i.ibb.co/b5ZSTdm/Rectangle-1275-13.png',
        ratting: '5',
        noOfRatting: '121',
        price: 150,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'Yellow fruits',
        group: 'fresh fruit',
        sku: 'fgf-1'
    },
    {
        name: 'Sauce',
        img: 'https://i.ibb.co/xjGCM97/Rectangle-1275-14.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'Groceries',
        subCategory: 'red sauces',
        group: 'sauces',
        sku: 'fgf-16'
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
        name: 'Beef',
        img: 'https://i.ibb.co/ym2QrSj/Rectangle-1275-4.png',
        ratting: '5',
        noOfRatting: '121',
        price: 700,
        oldPrice: 300,
        category: 'Meat',
        subCategory: 'Red Meat',
        group: 'Beef',
        sku: 'fgf-10'
    },
    {
        name: 'Lychee',
        img: 'https://i.ibb.co/Cvt8T59/Rectangle-1275-10.png',
        ratting: '5',
        noOfRatting: '121',
        price: 300,
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
        ratting: '3',
        noOfRatting: '121',
        price: 160,
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
        price: 400,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'red fruits',
        group: 'fresh fruit',
        sku: 'fgf-7'
    },
    {
        name: 'Capsicum',
        img: 'https://i.ibb.co/pwykb11/Rectangle-1275-5.png',
        ratting: '5',
        noOfRatting: '121',
        price: 100,
        oldPrice: 300,
        category: 'vegetables',
        subCategory: 'green vegetables',
        group: 'fresh vegetables',
        sku: 'fgf-9'
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