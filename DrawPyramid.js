class DrawPyramid {
    constructor(n, shape = '#'){
        this.n = n;
        this.shape = shape;
        // console.log('PLZ, select a num between 1 to 5');
    }
    shape1(n, shape = '#'){
        for (let i = 1; i <= n; i++) {
            let str = ' '.repeat(n - i);
            let str2 = shape.repeat(i );
            console.log(str2 + str);
        }
    }
    shape2(n, shape = '#'){
        for (let i = 1; i <= n; i++) {
            let str = ' '.repeat(n - i);
            let str2 = shape.repeat(i );
            console.log(str + str2);
        }
    }
    shape3(n, shape = '#'){
        let pyramid = '';
            const midpoint = Math.floor((2 * n - 1) / 2); // n=5 ==4
            for (let row = 0; row < n; row++) {
                let level = '';
                for (let col = 0; col < 2 * n - 1; col++) {
                if (midpoint - row <= col && midpoint + row >= col) {
                    level += shape;
                } else {
                    level += ' ';
                }
                }
                if( row === n-1) pyramid += level ;
            else pyramid += level + '\n';            }
            console.log(pyramid);
    }
    shape4(n, shape = '#'){
        let pyramid = '';
            const midpoint = Math.floor((2 * n - 1) / 2); // n=5 ==4
            for (let row = 0; row < n; row++) {
                let level = '';
                for (let col = 0; col < 2 * n - 1; col++) {
                if (midpoint - row <= col && midpoint + row >= col) {
                    level += shape;
                } else {
                    level += ' ';
                }
                }
                if( row === n-1) pyramid += level ;
            else pyramid += level + '\n';            }
            console.log(pyramid.split("").reverse().join(""));
    }
    shape5(n, shape = '#'){
        let pyramid = '';
            const midpoint = Math.floor((2 * n - 1) / 2); // n=5 ==4
            for (let row = 0; row < n; row++) {
                let level = '';
                for (let col = 0; col < 2 * n - 1; col++) {
                if (midpoint - row <= col && midpoint + row >= col) {
                    level += shape;
                } else {
                    level += ' ';
                }
                }
                if( row === n-1) pyramid += level ;
            else pyramid += level + '\n';            }
            console.log(pyramid + '\n'+ pyramid.split("").reverse().join(""));

    }
}
// make an obj and enjoy 
    let  obl = new DrawPyramid()
    obl.shape3(5)
   
