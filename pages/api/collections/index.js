const collectins = [
    {
        name: 'Pine Apple',
        img: 'https://i.ibb.co/b5ZSTdm/Rectangle-1275-13.png',
        ratting: '5',
        noOfRatting: '121',
        price: 150,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'Yellow_fruits',
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
        subCategory: 'green_fruits',
        sku: 'fgf-2'
    },
    {
        name: 'Product Name',
        img: 'https://i.ibb.co/G0s6cqD/Rectangle-1275-11.png',
        ratting: '4',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'white_fruits',
        sku: 'fgf-3'
    },
    {
        name: 'Lychee',
        img: 'https://i.ibb.co/Cvt8T59/Rectangle-1275-10.png',
        ratting: '5',
        noOfRatting: '121',
        price: 300,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'white_fruits',
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
        subCategory: 'yellow_fruits',
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
        subCategory: 'green_fruits',
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
        subCategory: 'red_fruits',
        sku: 'fgf-7'
    },
    {
        name: 'Guyava',
        img: 'https://i.ibb.co/pK1Q89j/Rectangle-1275-6.png',
        ratting: '5',
        noOfRatting: '121',
        price: 120,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'green_fruits',
        sku: 'fgf-8'
    },
    {
        name: 'Capsicum',
        img: 'https://i.ibb.co/pwykb11/Rectangle-1275-5.png',
        ratting: '5',
        noOfRatting: '121',
        price: 100,
        oldPrice: 300,
        category: 'vegetables',
        subCategory: 'green_vegetables',
        sku: 'fgf-9'
    },
    {
        name: 'Beef',
        img: 'https://i.ibb.co/ym2QrSj/Rectangle-1275-4.png',
        ratting: '5',
        noOfRatting: '121',
        price: 700,
        oldPrice: 300,
        category: 'Meat',
        subCategory: 'Red_Meat',
        sku: 'fgf-10'
    },
    {
        name: 'Papaya',
        img: 'https://i.ibb.co/qCsRhd0/Rectangle-1275-3.png',
        ratting: '4',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'yellow_fruits',
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
        subCategory: 'green_fruits',
        sku: 'fgf-13'
    },
    {
        name: 'Re_ Orange',
        img: 'https://i.ibb.co/6FSSWFq/Rectangle-1275-1.png',
        ratting: '5',
        noOfRatting: '121',
        price: 190,
        oldPrice: 300,
        category: 'fruits',
        subCategory: 'red_ fruits',
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
        subCategory: 'red_fruits',
        sku: 'fgf-15'
    },
    {
        name: 'Sauce',
        img: 'https://i.ibb.co/xjGCM97/Rectangle-1275-14.png',
        ratting: '5',
        noOfRatting: '121',
        price: 200,
        oldPrice: 300,
        category: 'Groceries',
        subCategory: 'red_sauces',
        sku: 'fgf-16'
    },
]

export default function handler(req, res) {
    res.status(200).json(collectins)
}