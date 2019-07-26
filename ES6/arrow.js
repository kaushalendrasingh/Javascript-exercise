class TaskCollection {
        // constructor(tasks =[]){
        //     this.tasks = tasks;
        // }


      
        log(tasks = [1,2,3,4,10]){
            this.tasks= tasks.forEach(task=>console.log(task));
        }

    }

    // class Task{

    // }


    // new TaskCollection([
    //     new Task, new Task, new Task]).log(); 
    new TaskCollection().log();