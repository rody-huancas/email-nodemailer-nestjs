export const welcomeTemplate = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #121212;
            color: #E0E0E0;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            background-color: #1E1E1E;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            max-width: 500px;
            margin: 20px;
            padding: 40px;
            text-align: center;
            border: 1px solid #2C2C2C;
        }
        .logo {
            color: #4A90E2;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        .welcome-title {
            color: #E0E0E0;
            font-size: 28px;
            margin-bottom: 15px;
        }
        .verification-code {
            background-color: #2C2C2C;
            color: #4A90E2;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 22px;
            font-weight: 600;
            display: inline-block;
            margin: 20px 0;
            letter-spacing: 3px;
        }
        .description {
            color: #A0A0A0;
            font-size: 16px;
            margin-bottom: 25px;
        }
        .footer {
            color: #707070;
            font-size: 12px;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">Novtiq</div>
        <h1 class="welcome-title">¡Bienvenido, {{name}}!</h1>
        <p class="description">Gracias por registrarte en nuestra plataforma. 
        Usa el siguiente código para verificar tu cuenta:</p>
        
        <div class="verification-code">{{verificationCode}}</div>
        
        <p class="description">
            Este código expirará en 24 horas. 
            Si no solicitaste este registro, puedes ignorar este mensaje.
        </p>
        
        <div class="footer">
            © ${new Date().getFullYear()} Novtiq. Todos los derechos reservados.
        </div>
    </div>
</body>
</html>
`;