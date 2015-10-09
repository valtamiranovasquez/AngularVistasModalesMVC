
modulo.controller("ModalController", function ($scope, $modal) {
    
    $scope.Vista_template = function () {
        var objeto = {
            v_mensaje: $scope.nombre
        };
       var modalInstance = $modal.open({
            templateUrl: 'mdangular',
            controller: 'mdModalController',
            size: 'lg', resolve: {
                args: function () {
                    return objeto;
                }
            }
        });
       
    };
    $scope.Vista_Parcial = function () {
        var url = "/Modal/VistaModal/";
        var objeto = {
            v_mensaje: $scope.nombre
        };

        $.get(url, function (data) {
          var  modalInstance = $modal.open({
                template: data,
                controller: 'mdModalController',
                size: 'lg', resolve: {
                    args: function () {
                        return objeto;
                    }
                }
          });
          modalInstance.result.then(function (resp) {
              alert(resp);
          });
        });
    };
});
modulo.controller("mdModalController", function ($scope, $modalInstance, args) {
    $scope.mostrarvariables = function () {
        $scope.mensaje = args.v_mensaje;
    };
    $scope.salir = function () {
        $modalInstance.close("salir");
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});