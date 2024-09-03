const helper = () => {
    const qs = selector => document.querySelector(selector);
    const qsa = selector => document.querySelectorAll(selector);

    const designs = {
        e: qs(".designs"),
        calculator: {
            e: qs(".designs .calculator"),
            screen: {
                e: qs(".designs .calculator .screen"),
            },
            row: [
                {
                    e: qsa(".designs .calculator .row")[0],
                    btn: [
                        {
                            e: qsa(".designs .calculator .row .btn")[0],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[1],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[2],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[3],
                        },
                    ],
                },
                {
                    e: qsa(".designs .calculator .row")[1],
                    btn: [
                        {
                            e: qsa(".designs .calculator .row .btn")[0],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[1],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[2],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[3],
                        },
                    ],
                },
                {
                    e: qsa(".designs .calculator .row")[2],
                    btn: [
                        {
                            e: qsa(".designs .calculator .row .btn")[0],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[1],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[2],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[3],
                        },
                    ],
                },
                {
                    e: qsa(".designs .calculator .row")[3],
                    btn: [
                        {
                            e: qsa(".designs .calculator .row .btn")[0],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[1],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[2],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[3],
                        },
                    ],
                },
                {
                    e: qsa(".designs .calculator .row")[4],
                    btn: [
                        {
                            e: qsa(".designs .calculator .row .btn")[0],
                        },
                        {
                            e: qsa(".designs .calculator .row .btn")[1],
                        },
                    ],
                    btnlrg: {
                        e: qs(".designs .calculator .row .btnlrg"),
                    },
                },
            ],
        },
        interface: {
            e: qs(".designs .interface"),
            main: {
                e: qs(".designs .interface .main"),
                nav: {
                    e: qs(".designs .interface .main .nav"),
                    btn: [
                        {
                            e: qsa(".designs .interface .main .nav .btn")[0],
                        },
                        {
                            e: qsa(".designs .interface .main .nav .btn")[1],
                        },
                        {
                            e: qsa(".designs .interface .main .nav .btn")[2],
                        },
                        {
                            e: qsa(".designs .interface .main .nav .btn")[3],
                        },
                    ],
                },
                body: {
                    e: qs(".designs .interface .main .body"),
                    section: [
                        {
                            e: qsa(".designs .interface .main .body .section")[0],
                            text: {
                                e: qs(".designs .interface .main .body .section .text"),
                            },
                            title: {
                                e: qs(".designs .interface .main .body .section .title"),
                            },
                        },
                        {
                            e: qsa(".designs .interface .main .body .section")[1],
                            text: {
                                e: qs(".designs .interface .main .body .section .text"),
                            },
                            title: {
                                e: qs(".designs .interface .main .body .section .title"),
                            },
                        },
                    ],
                },
            },
            side: {
                e: qs(".designs .interface .side"),
                btn: [
                    {
                        e: qsa(".designs .interface .side .btn")[0],
                    },
                    {
                        e: qsa(".designs .interface .side .btn")[1],
                    },
                    {
                        e: qsa(".designs .interface .side .btn")[2],
                    },
                    {
                        e: qsa(".designs .interface .side .btn")[3],
                    },
                ],
            },
        },
    };

    return {
        designs
    };
}