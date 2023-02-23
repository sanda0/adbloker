import { createApp } from "vue";
import App from "../views/popup.vue";
import {
  Button,
  Col,
  Row,
  Image as VanImage,
  NavBar,
  Switch,
  Toast,
} from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.use(Button);
app.use(Col);
app.use(Row);
app.use(VanImage);
app.use(NavBar);
app.use(Switch);
app.use(Toast);

app.mount("#app");
