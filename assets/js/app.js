$(document).ready(function(){
    $("#submit").click(function() {
        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const church = $('#church').val();
        const vehicle = $('#vehicle').val();
        const note = $('#note').val();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','https://test.hqltech.vn/public/');

        fetch('https://test.hqltech.vn/public/api/v1/regform', {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                church: church,
                vehicle: vehicle,
                note: note
            })
        }).then(function (res) {
            if(res.ok == false) {
                var modal = $('.modal-false');
                var span = $('.close');
                modal.show();
                span.click(function () {
                    modal.hide();
                });
                $(window).on('click', function (e) {
                    if ($(e.target).is('.modal')) {
                        modal.hide();
                    }
                });
            } else {
                var modal = $('.modal-true');
                var span = $('.close');
                modal.show();
                span.click(function () {
                    modal.hide();
                });
                $(window).on('click', function (e) {
                    if ($(e.target).is('.modal')) {
                        modal.hide();
                    }
                });
            }
        }).catch(function (err) {
            console.log("err" + err)
        });
    })
});