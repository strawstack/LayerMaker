const helper = () => {
    const qsa = selector => document.querySelectorAll(selector);

    const designs = {
        e: qsa(".designs")[0],
        calculator: {
            e: qsa(".designs .calculator")[0],
            screen: {
                e: qsa(".designs .calculator .screen")[0],
            },
            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
            },
            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: [
                  {
                    e: qsa(".designs .calculator .row .btn")[0],
                    child: {
                      e: qs(".designs .calculator .row .btn")
                    }
                  }
                ] 
                
                {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
            },
            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
            },
            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
            },
            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btn: {
                    e: qsa(".designs .calculator .row .btn")[0],
                },
                btnlrg: {
                    e: qsa(".designs .calculator .row .btnlrg")[0],
                },
            },
        },
        interface: {
            e: qsa(".designs .interface")[0],
            main: {
                e: qsa(".designs .interface .main")[0],
                nav: {
                    e: qsa(".designs .interface .main .nav")[0],
                    btn: {
                        e: qsa(".designs .interface .main .nav .btn")[0],
                    },
                    btn: {
                        e: qsa(".designs .interface .main .nav .btn")[0],
                    },
                    btn: {
                        e: qsa(".designs .interface .main .nav .btn")[0],
                    },
                    btn: {
                        e: qsa(".designs .interface .main .nav .btn")[0],
                    },
                },
                body: {
                    e: qsa(".designs .interface .main .body")[0],
                    section: {
                        e: qsa(".designs .interface .main .body .section")[0],
                        text: {
                            e: qsa(".designs .interface .main .body .section .text")[0],
                        },
                        title: {
                            e: qsa(".designs .interface .main .body .section .title")[0],
                        },
                    },
                    section: {
                        e: qsa(".designs .interface .main .body .section")[0],
                        text: {
                            e: qsa(".designs .interface .main .body .section .text")[0],
                        },
                        title: {
                            e: qsa(".designs .interface .main .body .section .title")[0],
                        },
                    },
                },
            },
            side: {
                e: qsa(".designs .interface .side")[0],
                btn: {
                    e: qsa(".designs .interface .side .btn")[0],
                },
                btn: {
                    e: qsa(".designs .interface .side .btn")[0],
                },
                btn: {
                    e: qsa(".designs .interface .side .btn")[0],
                },
                btn: {
                    e: qsa(".designs .interface .side .btn")[0],
                },
            },
        },
    };

    return {
        designs
    };
}