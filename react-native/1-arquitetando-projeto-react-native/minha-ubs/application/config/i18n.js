/**
 * { ptBR: { hello: 'Olá mundo' }, en: { hello: 'Hello World' } }
 * t('hello'); // Olá Mundo
 *
 * { ptBR: { hi: 'Oi {name}' } }
 * t('hello', { name: 'Guilherme' }); // Oi Guilherme
**/

import { Globalize } from 'react-native-globalize'
import translations from './locales/content'

Globalize.loadMessages(translations)
const I18n = new Globalize('pt')

const translate = (message = false, values = undefined) => {
  if(!message) return

  return I18n.getMessageFormatter(message)(values)
}

export default translate