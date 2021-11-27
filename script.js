var input = require('fs').readFileSync('stdin', 'utf8');
var N = input.split('\n')

for(a=0, X=0, Y=0; a<N.length; a++ ){
    var X = parseInt(N[a].split(' ').shift());
    var Y = parseInt(N[a].split(' ')[1]);
    if(X == Y) {
        z = 0;
        console.log(z)
    } else if(X<Y) {
        for(i=X+1, z=0; i<Y; i++){
            if(i%2==1 || i%2==-1){
                z = z + i;
            }
        }
        console.log(z)
    } else {
        for(i=Y+1,z=0; i<X; i++){
           if(i%2==1 || i%2==-1){
               z = z + i;
           }
        }
        console.log(z);
    }
}