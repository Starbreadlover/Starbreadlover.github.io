function fToC(f){ return (f - 32) * 5 / 9; }

    document.getElementById('convert').addEventListener('click', function(){
        ['f1'].forEach(function(id, idx){
            var v = parseFloat(document.getElementById(id).value);
            var out = document.getElementById('c' + (idx + 1));
            out.textContent = Number.isFinite(v) ? ' = ' + fToC(v).toFixed(2) + ' °C' : '';
        });
    });