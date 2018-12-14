let smockCore=require('smock-core');
console.log(smockCore,'smockCore');

class HelloWorldPlugin {
    constructor(options) {
      this.options = options;
    }
  
    apply(compiler) {
      

        console.log(compiler.hooks);
        if(compiler.hooks){
          compiler.hooks.done.tap('HelloWorldPlugin', () => {
            console.log('Hello World!');
            console.log(this.options);
            smockCore.init(
              this.options
            ); 
          });
        }else{
          compiler.plugin('done',() => {
            console.log('Hello World!');
            console.log(this.options);
            smockCore.init(
              this.options
            ); 
          })
        }
    }
  }
  
module.exports = HelloWorldPlugin;