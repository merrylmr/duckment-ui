import {App} from 'vue'
import ZzMenu from './menu/Index.vue'
import ZzMenuItem from './menu-item/Index.vue'
import ZzMenuItemGroup from './menu-item-group/Index.vue'

export default (app: App): void => {
  console.log('app', app);
  app.component(ZzMenu.name, ZzMenu)
  app.component(ZzMenuItem.name, ZzMenuItem)
  app.component(ZzMenuItemGroup.name, ZzMenuItemGroup)
}

