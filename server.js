const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const app=express();
app.use(express.json());
require('dotenv').config()
