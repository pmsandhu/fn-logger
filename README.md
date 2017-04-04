#### FUNCTION LOGGER
A JavaScript logging utility that prints the name of the function from where it is called with an assigned pretty color.

* It works in both node and browser environments;  
* Supported browsers are Chrome and Opera 


#### RUN:
```bash
  install fn-logger --save-dev
````

####USAGE 
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
 Browser  
![Alt text](https://8brpwa-ch3301.files.1drv.com/y3mSYu3ecmkbVsGNRb5x0jv3r_6Fn6U6FtVQe7eYYTUnEpGUXe6gulvjZuLrdCLV82i0jSMDa5gzAG2nw71KQgOBggTGMVUfukO7RMRmeGgr34gTTwE2APKvCQhcMnqa2DNjHhTdsEtFPh7FiH3thefGb1PGYxe2o4qWN9e2YgtsVk?width=458&height=28&cropmode=none)    

Node  
![Alt text](https://6rtqza-ch3301.files.1drv.com/y4mkhf92pVb7Z-LSWNKGwd38g0lSL6fw4AZTxuNaPEuf-QnZhmeWLeByUGu6kfxPJNaRWFbDUsH3jprQzALiiDYKC8FYXa5leznU2K2tuQotax0b07JTFZnGTRCq6MadMWS-MUpRZSDNAvSPrcQKB_xJhXNgy41s5509KKXfjIkbrBsCed1LGS0OaQjhMYmGMlM6NcoDOVKrbTu54sJ9j_q1A?width=458&height=54&cropmode=none)   
  
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
Browser  
![Alt text](https://6ltqza-ch3301.files.1drv.com/y3mpbnXPxWYfUm1SOm5GsLpjDTZXlR1oSxbqqzNfkSf9UglsUzf-MKf2DDmaVlFeVxxa-xky2ieXegfQxa_yjNK-CusmWSefnll9jg1MzqKzTzT71C9YUP8iNnhGV4bwn-5KakpARRPXI9XH4YB-pMcuZne4aQXhuIRSkYwnckdPeQ?width=411&height=98&cropmode=none)  
Node  
![Alt text](https://7btqza-ch3301.files.1drv.com/y4m4r6-2ssPvbHNck9RHcADCHmPB2A3reLgTNQkXltBzWqL3gMcg6kmA5sbITLKb61xEMsnyw98U0TkvBeEyk5d8Ishub4a5c8plY97M4WKFrSvJwDAE11uhxXMlOPtR0nySQ5ltS7MBolYhSAqWzGYeldC-tY1elcJWKt3Lsd7OLsbtO6E-X3mB95oL9lGC8Qmu9-OlGASgYicNydjnLqRnA?width=434&height=150&cropmode=none)






