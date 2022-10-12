/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

interface Ubuntu {
  name: string;
  age: number;
  weight: number;
  height: number;
  isDev: boolean;
}

const ubuntus: Ubuntu[] = [
  {
    name: "Wallace Júnior",
    age: 25,
    weight: 95.5,
    height: 1.79,
    isDev: true,
  },
  {
    name: "Guilherme Thadeu",
    age: 26,
    weight: 60.2,
    height: 1.75,
    isDev: false,
  },
  {
    name: "Eliel Silva",
    age: 33,
    weight: 88.5,
    height: 1.65,
    isDev: true,
  },
];

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  // Somar a idade de todos os Ubuntus
  const ubuntusTotalAge = ubuntus.reduce(
    (total, ubuntu) => total + ubuntu.age,
    0,
  );

  console.log("\nSoma da idade de todos os ubuntus: ", ubuntusTotalAge);

  // Agrupar o nome de todos os Ubuntus
  const names = ubuntus.map(ubuntu => ubuntu.name);
  console.log("Nomes de todos os ubuntus: ", names);

  // Calcular média IMC de todos os Ubuntus
  const ubuntusImcAverage =
    ubuntus.reduce(
      (total, ubuntu) => total + ubuntu.weight / ubuntu.height ** 2,
      0,
    ) / ubuntus.length;

  console.log("Média IMC de todos os Ubuntus: ", ubuntusImcAverage);

  // Contar quantos Ubuntus são devs
  const ubuntuDevCount = ubuntus.filter(ubuntu => ubuntu.isDev).length;
  console.log("Quantidade de Ubuntus que são devs: ", ubuntuDevCount);

  // Exibir somente os Ubuntus com sobrenome Silva
  const ubuntusWithSilvaSurname = ubuntus.reduce<string[]>((arr, ubuntu) => {
    const surname = ubuntu.name.split(" ")[1];

    if (surname.match(/Silva/i)) {
      arr.push(ubuntu.name);
    }

    return arr;
  }, []);

  console.log("Ubuntus com o sobrenome Silva: ", ubuntusWithSilvaSurname);
});
