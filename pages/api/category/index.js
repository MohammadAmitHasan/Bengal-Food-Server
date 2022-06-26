const category = [
    {
        id: 1,
        name: 'Meat',
        img: 'https://i.ibb.co/26s3CrR/Meat.png'
    },
    {
        id: 2,
        name: 'Fish',
        img: 'https://i.ibb.co/4JvJKWZ/Fish.png'
    },
    {
        id: 3,
        name: 'Groceries',
        img: 'https://i.ibb.co/gTRb9rK/Groceries.png'
    },
    {
        id: 4,
        name: 'Ice-Cream',
        img: 'https://i.ibb.co/R24WQ9b/Ice-Cream.png'
    },
    {
        id: 5,
        name: 'Fruits',
        img: 'https://i.ibb.co/xjTc14L/Fruits.png'
    },
    {
        id: 6,
        name: 'Vegetables',
        img: 'https://i.ibb.co/dM9wWzJ/Vegetables.png'
    },

]

export default function handler(req, res) {
    res.status(200).json(category)
}