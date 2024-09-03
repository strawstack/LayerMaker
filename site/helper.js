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
                    e: qs(".designs .calculator .row:nth-child(2)"),
                    btn: [
                        {
                            e: qs(".designs .calculator .row:nth-child(2) .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(2) .btn:nth-child(2)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(2) .btn:nth-child(3)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(2) .btn:nth-child(4)"),
                        },
                    ],
                },
                {
                    e: qs(".designs .calculator .row:nth-child(3)"),
                    btn: [
                        {
                            e: qs(".designs .calculator .row:nth-child(3) .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(3) .btn:nth-child(2)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(3) .btn:nth-child(3)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(3) .btn:nth-child(4)"),
                        },
                    ],
                },
                {
                    e: qs(".designs .calculator .row:nth-child(4)"),
                    btn: [
                        {
                            e: qs(".designs .calculator .row:nth-child(4) .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(4) .btn:nth-child(2)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(4) .btn:nth-child(3)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(4) .btn:nth-child(4)"),
                        },
                    ],
                },
                {
                    e: qs(".designs .calculator .row:nth-child(5)"),
                    btn: [
                        {
                            e: qs(".designs .calculator .row:nth-child(5) .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(5) .btn:nth-child(2)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(5) .btn:nth-child(3)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(5) .btn:nth-child(4)"),
                        },
                    ],
                },
                {
                    e: qs(".designs .calculator .row:nth-child(6)"),
                    btn: [
                        {
                            e: qs(".designs .calculator .row:nth-child(6) .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .calculator .row:nth-child(6) .btn:nth-child(2)"),
                        },
                    ],
                    btnlrg: {
                        e: qs(".designs .calculator .row:nth-child(6) .btnlrg"),
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
                            e: qs(".designs .interface .main .nav .btn:nth-child(1)"),
                        },
                        {
                            e: qs(".designs .interface .main .nav .btn:nth-child(2)"),
                        },
                        {
                            e: qs(".designs .interface .main .nav .btn:nth-child(3)"),
                        },
                        {
                            e: qs(".designs .interface .main .nav .btn:nth-child(4)"),
                        },
                    ],
                },
                body: {
                    e: qs(".designs .interface .main .body"),
                    section: [
                        {
                            e: qs(".designs .interface .main .body .section:nth-child(1)"),
                            text: {
                                e: qs(".designs .interface .main .body .section:nth-child(1) .text"),
                            },
                            title: {
                                e: qs(".designs .interface .main .body .section:nth-child(1) .title"),
                            },
                        },
                        {
                            e: qs(".designs .interface .main .body .section:nth-child(2)"),
                            text: {
                                e: qs(".designs .interface .main .body .section:nth-child(2) .text"),
                            },
                            title: {
                                e: qs(".designs .interface .main .body .section:nth-child(2) .title"),
                            },
                        },
                    ],
                },
            },
            side: {
                e: qs(".designs .interface .side"),
                btn: [
                    {
                        e: qs(".designs .interface .side .btn:nth-child(1)"),
                    },
                    {
                        e: qs(".designs .interface .side .btn:nth-child(2)"),
                    },
                    {
                        e: qs(".designs .interface .side .btn:nth-child(3)"),
                    },
                    {
                        e: qs(".designs .interface .side .btn:nth-child(4)"),
                    },
                ],
            },
        },
    };

    return {
        designs
    };
}