(() => {

    const { 
        designs 
    } = helper();

    function main() {

        // Code here
        console.log(designs);
        console.log(designs.e);
        console.log(designs.calculator.screen.e);
        console.log(designs.calculator.row[0].btn[2].e);
        console.log(designs.interface.main.body.section[0].e);

    }

    main();

})();