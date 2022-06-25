<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Stock</title>
    </head>
    <body>
        <style>
        body , table{
            width: 100%;
            text-align: center;
        }
        
        table,table td , table th  {
            font-size: 11px;
            border: 1px solid black;
            border-collapse: collapse;
        }
        .logo1{
            position: relative;
            right: -320px;
        }
        .logo2{
            position: relative;
            left: -450px; 
            top: -40px;
        }
        </style>
        
        <div>
            <img class="logo1" src="vendor/jig/images/logo_text.png" width="300" height="150" alt="logo">
            <img class="logo2" src="vendor/jig/images/mr_logo.png" width="100" height="100" alt="logo">
            <p><B>{{$file_title}}</B></p>
        </div>

        <table>
            <thead>
                <tr>
                    @foreach ($columns as $inx => $col)
                        <th>{{$col}}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $i => $row)
                    <tr>
                        @foreach ($columns as $inx => $col)
                            <td>{!! $row[$inx] !!}</td>
                        @endforeach
                    </tr>
                @endforeach
            </tbody>
        </table>
    </body>
</html>