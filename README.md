#### FUNCTION LOGGER
A browser logging utility that prints the name of the function from where it is called with an assigned pretty color.

To use run: <br/>
```javascript
  install fn-logger --save-dev
````

&nbsp;&nbsp;&nbsp;&nbsp;USAGE:
```javascript
    import logger from 'fn-logger'
    
    function animal(type) {
      logger(type)
    }
    animal({type: 'cat', color: 'black'})
```
![Alt text](https://8brpwa-ch3301.files.1drv.com/y3mSYu3ecmkbVsGNRb5x0jv3r_6Fn6U6FtVQe7eYYTUnEpGUXe6gulvjZuLrdCLV82i0jSMDa5gzAG2nw71KQgOBggTGMVUfukO7RMRmeGgr34gTTwE2APKvCQhcMnqa2DNjHhTdsEtFPh7FiH3thefGb1PGYxe2o4qWN9e2YgtsVk?width=458&height=28&cropmode=none)

&nbsp;&nbsp;&nbsp;&nbsp;Or import at the root of your project and then save to window to use without having to import it into every file:

```javascript
    import logger from 'fn-logger'
    
    window.logger = logger //or window.whateverYouWantToCallIt = logger
    
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
![Alt text](https://6ltqza-ch3301.files.1drv.com/y3mpbnXPxWYfUm1SOm5GsLpjDTZXlR1oSxbqqzNfkSf9UglsUzf-MKf2DDmaVlFeVxxa-xky2ieXegfQxa_yjNK-CusmWSefnll9jg1MzqKzTzT71C9YUP8iNnhGV4bwn-5KakpARRPXI9XH4YB-pMcuZne4aQXhuIRSkYwnckdPeQ?width=411&height=98&cropmode=none)

<br/>
** Supported browsers are Chrome and Opera <br/>
** Microsoft Edge does not support custom styles for console output so it will default to just printing the name of the function in which it was called <br/>
** This will not print colors in a node environment and will append a %c to the beginning of the function name





