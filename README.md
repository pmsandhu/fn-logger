#### FUNCTION LOGGER
A JavaScript logging utility that prints the name of the function from where it is called with an assigned pretty color.

* It works in both node and browser environments;  
* Supported browsers are Chrome and Opera 


#### RUN:
```bash
npm install fn-logger --save-dev
````

#### USAGE 
```javascript
  /** using es6 modules **/
  import logger from 'fn-logger'
  
  /** using commonJS modules **/
  const logger = require('fn-logger')
  
  function animal(type) {
    logger(type)
  }
    
  animal({type: 'cat', color: 'black'})
```
 **Browser**  
![Alt text](https://8brpwa.ch.files.1drv.com/y4m_rFgTJ7qxGhMUkuPqbSKsvwVqWEpap5ErWcbzTnzuJI1hcStbiytOfvT5p4o76F7htEPNdYDGcWOpJSGfUCSIdoP98tEvLGLCYcof5271Ch7RkxmsDNDKqKZ98Yp5YsuRf774TXa1e91LhR45yM9MJmDe_2OkVqgkU_kcX8IfIPhMs-D2g1x-4Tm57fvuqQmk8faIORFUdG0F59Yjtko2A?width=458&height=28&cropmode=none)    

**Node**  
![Alt text](https://6rtqza.ch.files.1drv.com/y4mlXjYIwwULocs7aMPCoP9EdimKzizC8AkzcVyDFSJxMLX0bpUdbCnJrXyLqiLPr-sPTcjWqaF43Jx0PJjcewPxrhnxZVrL5R6Cn1W1M7u6p4Ferw44dkQlue3ZrlvGLSJigLHYlE2FNPP-ZzkvEX3xvpCfEfABZP5Kh7xjQDxM42vi2JUNT1c7BbnO7MBu1oAtwOqdBBuROpmghp9cqin7Q?width=458&height=54&cropmode=none)   
  
Or import at the root of your project and then save to window to use without having to import it into every file:

```javascript
    /** using es6 modules in browser environment **/  
    import logger from 'fn-logger'
    window.logger = logger //or window.whateverName = logger
     
     /** using commonJS in node environment **/ 
    const logger= require('fn-logger')
    global.logger = logger
    
    class Cat{
      constructor(name, age, breed) {
        this.name = name
        this.age = age
        this.breed = breed
      }
      getName() {
        logger('name -->', this.name)
      }
      getAge() {
        logger('age -->', this.age)
      }
      isBreed(type) {
        const isBreed = this.breed === type
        logger(`is breed ${type} ${isBreed}`)
      }
    }
    
    const cat = new Cat('Pippa', 1, 'siamese')
    cat.getName()
    cat.getAge()
    cat.isBreed('siamese')
```
**Browser**  
![Alt text](https://6ltqza.ch.files.1drv.com/y4mDlvEWvSdTR3UhWBfoj3iXjQIN4WH1zPzIyBg70UzYjsP9pA86OvEGZW2uob9UmUSyXV9d3EDMkFbKZFRXlG3_f96HJ-Q9IhyipZofAPtDnw3SzA-pOIIaBxjBsniTDxsTk0El5kiDb9MpewlypKwpUG-L6vliaDZYSB8BTxjJp4WY4HWZPJ-sY45o1iHK0IZEeaEf70RhQHnmXT5YhfHGg?width=411&height=98&cropmode=none)    

  **Node**  
![Alt text](https://7btqza-ch3301.files.1drv.com/y4m4r6-2ssPvbHNck9RHcADCHmPB2A3reLgTNQkXltBzWqL3gMcg6kmA5sbITLKb61xEMsnyw98U0TkvBeEyk5d8Ishub4a5c8plY97M4WKFrSvJwDAE11uhxXMlOPtR0nySQ5ltS7MBolYhSAqWzGYeldC-tY1elcJWKt3Lsd7OLsbtO6E-X3mB95oL9lGC8Qmu9-OlGASgYicNydjnLqRnA?width=434&height=150&cropmode=none)






