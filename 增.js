/* 
 向数据库中插入文档
 db.<colltctions>.insert()
    -向集合中插入一个或多个文档
    -当我们插入文档时,如果没有指定 —id属性,则库会自动添加用来作为文档的唯一标识
    -如果我们制定了，数据库不会再添加了
 db.<colltctions>.insertOne()
     -插入一个文档对象
 db.<colltctions>.insertMany()
     -插入多个文档对象
*/
db.stus.insert({name:"猪八戒",age:18,genger:"男"});

db.stus.insert([
  {name:"李孟飞",age:18,gender:"男"},
  {name:"飞飞",age:18,gender:"男"},
  {name:"牛牛",age:20,gender:"男"}
]);
db.stus.insert({_id:"hello", name:"猪",age:17,gender:"女"});
db.stus.find();
ObjectId();
