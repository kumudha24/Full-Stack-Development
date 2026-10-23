const express=require("express");
const app=express();
app.use(express.json());
const PORT=3000;
let products=[
    {
        id:1,
        name:"Laptop",
        category:"Electronics",
        price:60000
    },
    {
        id: 2,
        name: "Phone",
        category: "Electronics",
        price: 30000
    },
    {
        id: 3,
        name: "Shoes",
        category: "Fashion",
        price: 2500
    },
    {
        id: 4,
        name: "Backpack",
        category: "Accessories",
        price: 1500
    }
];
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/products",(req,res)=>{
    res.json(products);
});
app.get("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const product=products.find(p=>p.id===id);
    if(!product){
        return res.status(404).json({
            message:"Product not found"
        });
    }
    res.json(product);
});
app.post("/products",(req,res)=>{
    const {name,category,price}=req.body;
    if(!name||!category||price===undefined){
        return res.status(400).json({
            message:"Name,category and price are required"
        });
    }
    if(price<0){
        return res.status(400).json({
            message:"Price cannot be negative"
        });
    }
    const newProduct={
        id:products.length+1,
        name:name,
        category:category,
        price:price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.put("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const product=products.find(p=>p.id===id);
    if(!product){
        return res.status(404).json({
            message:"Product not found"
        });
    }
    const {name,category,price}=req.body;
    if(!name||!category||price===undefined){
        return res.status(400).json({
            message:"Name,category and price are required"
        });
    }
    if(price<0){
        return res.status(400).json({
            message:"Price cannot be negative"
        });
    }
    product.name=name;
    product.category=category;
    product.price=price;
    res.json(product);
});
app.patch("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const product=products.find(p=>p.id===id);
    if(!product){
        return res.status(404).json({
            message:"Product not found"
        })
    };
    const {name,category,price}=req.body;
    if(price<0){
        return res.status(404).json({
            message:"Price cannot be negative"
        });
    }
    if(name!==undefined){
        product.name=name;
    }
    if(category!==undefined){
        product.category=category;
    }
    if(price!==undefined){
        product.price=price;
    }
    res.json(product);
});
app.delete("/products/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index=products.findIndex(p=>p.id===id);
    if(index===-1){
        return res.status(404).json({
            message:"Product not found"
        });
    }
    const deletedProduct=products.splice(index,1);
    res.json({
        message:"Product deleted successfully",
        product:deletedProduct[0]
    });
});