import express from 'express';
import {studentModel} from '../models/studentModel.js'

const app = express();


//create
app.post('/student', async(req, res)=>{
  try {
    const student = await new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send("Erro ao inserir documento: " + error )
  }
});

//retrieve
app.get('/student', async(req, res)=>{
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send("Erro ao recuperar dados: " + error)
  }
});

//update
app.patch('/student/:id', async(req, res)=>{
  try {
    const id = req.params.id;

    const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true})
    if(!student){
      res.status(404).send("Documento não encontrado na coleção");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar dados: " + error)
  }
});

//delete
app.delete('/student/:id', async(req,res)=>{
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({_id: id})
    if(!student){
      res.status(404).send("Documento não encontrado na coleção");
    } else {
      res.status(200).send(`${student} deletado com sucesso`);
    }
  } catch (error) {
    res.status(500).send("Erro ao deletar dados: " + error)
  }
});

app.put('/students/:id', async(req,res)=>{
  try {
    const id = req.params.id;

    const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true})
    if(!student){
      res.status(404).send("Documento não encontrado na coleção");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(500).send("Erro ao atualizar dados: " + error)
  }
});

export {app as studentRouter};