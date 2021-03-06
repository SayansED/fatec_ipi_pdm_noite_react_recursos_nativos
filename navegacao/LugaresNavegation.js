import { createStackNavigation } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import MapaTela from '../telas/mapaTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import Cores from '../constantes/Cores';

const LugaresNavegation = createStackNavigation(
    {
        ListaDeLugares: ListaDeLugaresTela,
        DetalhesDoLugar: DetalhesDoLugarTela,
        NovoLugar: NovoLugarTela,
        Mapa: MapaTela
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
                headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
            }
        }
    }
)

export default createAppContainer(LugaresNavegation);