export class HomeController {

   data;
    static $inject = [ 'weatherService','$scope'
    ]

    constructor(private weatherService, private $scope) {
    this.get()
    }

    get()
    {
        this.weatherService.get().then((response)=>{
        this.$scope.data=response.data;
        })
    }
  
}
