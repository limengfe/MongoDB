/*
   查询
  db.collection.find()
   -find()用来查询集合所有符合条件的文档
   -find()可以接收一个对象作为条件参数
        {}表示查询所有文档 和什么都不加一样
        {属性：值}查询指定的文档
   -find()返回是一个数组    
  
  db.collections.findOne() 
    -用来查询符合条件的第一个文档
    -返回值时对象
    
  db.collection.find({}).count()
    -查询所有结果的数量  
*/

db.stus.find();
db.stus.find({age:18});
db.stus.find({name:"猪八戒"});

db.stus.findOne({gender:"男"}) ;
db.stus.find({gender:"男"}).count() ;
