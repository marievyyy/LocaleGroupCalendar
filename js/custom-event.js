$(document).ready(function() {

    $('#calendar').fullCalendar({
        defaultDate: '2018-01-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
                title: 'FACT: SMS development',
                start: '2018-01-23'
            },
            {
                title: 'OPs: SMS ex FACT to Arrival',
                start: '2018-01-22'
            },
            {
                title: 'PROTO EX FTY',
                start: '2017-11-17'
            },
            {
                title: 'SMS PO SUBMISSION',
                start: '2017-11-29',
                end: '2017-11-29'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2017-12-16T16:00:00'
            },
            {
                title: 'SALES/DESIGN: Range Review',
                start: '2018-01-29',
                end: '2018-01-29'
            },
            {
                title: 'MARKETING: LB shoot and graphics',
                start: '2018-01-30T10:30:00',
                end: '2018-02-02T12:30:00'
            },
            {
                title: 'SALES',
                start: '2018-01-15',
                end: '2018-03-21'
            },
            {
                title: 'DESIGN: Sales Handover & Prepartion',
                start: '2018-01-15',
                end: '2018-01-15'
            },
            {
                title: 'SALES: Selling phase start and close Drop 1 JULY',
                start: '2018-01-15',
                end: '2018-03-14'
            },
            {
                title: 'SALES: Selling phase start and close Drop 2 AUG',
                start: '2018-01-15',
                end: '2018-03-14'
            },
            {
                title: 'SELLING WEEK 1',
                start: '2018-02-05',
                end: '2018-02-09'
            },
            {
                title: 'SELLING WEEK 2',
                start: '2018-02-12',
                end: '2018-02-16'
            },
            {
                title: 'SELLING WEEK 3',
                start: '2018-02-19',
                end: '2018-02-23'
            },
            {
                title: 'SELLING WEEK 4',
                start: '2018-02-26',
                end: '2018-03-02'
            },
            {
                title: 'SELLING WEEK 5',
                start: '2018-03-05',
                end: '2018-03-09'
            },
            {
                title: 'SELLING WEEK 6',
                start: '2018-03-12',
                end: '2018-03-16'
            },
            {
                title: 'PRINTS & COLOUR CONCEPTS',
                start: '2018-02-19',
                end: '2018-02-22'
            },
            {
                title: 'MEET WITH KELLI TO SIGN OFF PRINTS & COLOURS',
                start: '2018-02-23',
                end: '2018-02-26'
            },
            {
                title: 'DESIGN & FABRIC CONCEPTS',
                start: '2018-02-27',
                end: '2018-03-07'
            },
            {
                title: 'CONCEPT MEETING WITH KELLI',
                start: '2018-03-07',
                end: '2018-03-07'
            },
            {
                title: 'CHECK IN WITH KELLI',
                start: '2018-03-20',
                end: '2018-03-20'
            },
            {
                title: 'PA START MOCKING UP',
                start: '2018-03-21',
                end: '2018-03-22'
            },
            {
                title: 'DESIGNERS CONTINUE DESIGN',
                start: '2018-03-21',
                end: '2018-03-29'
            },
            {
                title: 'PA CONTINUE MOCKING UP',
                start: '2018-03-28',
                end: '2018-03-29'
            },
            {
                title: 'FINAL CHECK IN WITH KELLI',
                start: '2018-03-29',
                end: '2018-03-29'
            },
            {
                title: 'DESIGNERS FINISH DESIGNS',
                start: '2018-03-30',
                end: '2018-04-02'
            }
        ]
    });

});