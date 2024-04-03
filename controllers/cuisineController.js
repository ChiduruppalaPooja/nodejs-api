const Cuisine = require('../models/Cuisine');

const createCuisine = async(req,res)=>{
    try{
        const {id,name,type} = req.body

        const cuisine = new Cuisine({
            id,
            name,
            type
            
        })
        await cuisine.save()
        res.status(201).json(cuisine)
    }catch(error){
        console.log("there is an error",error);
        res.status(500).json({message:'server error'})
    }
}

const getCuisine = async(req,res)=>{
    try{
        const cuisines = await Cuisine.find()
        res.status(201).json(cuisines)
    }catch(error){
        console.log("there is an error",error);
        res.status(500).json({message:'server error'})
    }
}

const singleCuisine = async(req,res)=>{
    try{
        const cuisine = await Cuisine.findById(req.params.id)
        if(!cuisine){
            return res.status(404).json({message:"not found"})
        }
        res.status(200).json(cuisine)
    }catch(error){
        console.log("there is an error",error);
        res.status(500).json({message:'server error'})
    }
}

const updateCuisine = async(req,res)=>{
    try{
        const {cuisine_id,name,type} = req.body
        const myCuisine =  await Cuisine.findByIdAndUpdate(
            req.params.id,
            {cuisine_id, name, type}
        )
        if(!myCuisine){
            return res.status(404).json({message:"not found"})
        }
        res.status(200).json(myCuisine)
    }catch(error){
        console.log("there is an error",error);
        res.status(500).json({message:'server error'})
    }
}


const deleteCuisine = async(req,res)=>{
    try{
        const deletedCuisine = await Cuisine.findByIdAndDelete(
            req.params.id
        )
        if(!deletedCuisine){
            return res.status(404).json({message:"not found"})
        }
        res.status(200).json(deletedCuisine)
    }catch(error){
        console.log("there is an error",error);
        res.status(500).json({message:'server error'})
    }

}



module.exports = { createCuisine, getCuisine, singleCuisine, updateCuisine, deleteCuisine }