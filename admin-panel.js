$('.add-patients').click(()=>{
    $('.add-section').css('display', 'none')
    $('.patient-list').css('display', 'block')
})

$('.dashboard').click(()=>{
    $('.dashboard-content').css('display', 'block')
    $('.page-content').css('display', 'none')
    $('.patient-list').css('display', 'none')
    $('.add-section').css('display', 'none')
})

$('.patient').click(()=>{
    $('.mypatients').css('display', 'block')
    $('.dashboard-content').css('display', 'none')
    $('.page-content').css('display', 'none')
    $('.mydoctor').css('display', 'none')
})

$('.fixed').click(()=>{
    $('.page-content').css('display', 'block')
    $('.patient-list').css('display', 'none')
    $('.dashboard-content').css('display', 'none')
    $('.add-section').css('display', 'none')
})

$('#doctors').click(()=>{
    $('.mydoctor').css('display', 'block')
    $('.page-content').css('display', 'none')
    $('.patient-list').css('display', 'none')
    $('.dashboard-content').css('display', 'none')
    $('.mypatients').css('display', 'none')
})
