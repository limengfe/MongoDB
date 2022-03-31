/*
 修改
 db.collection.update(查询条件，新对象)
   -update()默认情况会使用新对象替代旧的对象
   -如果需要修改指定的属性,不是替换而是需要“修饰符”
     $set可用来修改指定的属性
     $unset用来删除指定的属性
   -update()默认修改一个还可以修改很多个  使用{multi:true}修改多个
 db.collection.updateMany()
    -同时修改多个符合条件的文档
 db.collection.updateOne()
    -修改一个符合条件的文档 
 db.collection.replaceOne()
    -替换一个文档 
*/
db.stus.find();
//替代
db.stus.update({name:"飞飞"},{age:38});
db.stus.update(
    {"_id" : ObjectId("6222d6f461657a4cdaffb78e")},
    {$set:{
    age:"16",
    address:"地球"
        
    }}    
)

db.stus.update(
    {"_id" : ObjectId("6222d6f461657a4cdaffb78e")},
    {$unset:{
        address:1
    }}    
)

db.stus.updateMany(
    {"gender":"男"},
    {
    $set:{
    gender:"女"
    }
    }
)

//使用update()修改多个

db.stus.update(
  {"gender":"女"},
  {$set:{gender:"男"}},  //此时修改一个
  {
  multi:true
  }
  
  )
  
db.stus.find();
