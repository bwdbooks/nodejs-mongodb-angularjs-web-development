var fs = require('fs');
fs.mkdir("./data/folderA", function(err){
  fs.mkdir("./data/folderA/folderB", function(err){
    fs.mkdir("./data/folderA/folderB/folderD", function(err){
    });
  });
  fs.mkdir("./data/folderA/folderC", function(err){
    fs.mkdir("./data/folderA/folderC/folderE", function(err){
    });
  });
});
fs.rmdir("./data/folderA/folderB/folderD", function(err){
  fs.rmdir("./data/folderA/folderB", function(err){
    fs.rmdir("./data/folderA/folderC/folderE", function(err){
      fs.rmdir("./data/folderA/folderC", function(err){
        fs.rmdir("./data/folderA", function(err){          
        });          
      });
    }); 
  });
});

