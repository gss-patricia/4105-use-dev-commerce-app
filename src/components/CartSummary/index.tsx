import { Product } from "../../common/types/product";
import CartActions, { CartActionsProps } from "../CartActions";
import Divider from "../Divider";
import Field from "../Field";
import Typography from "../Typography";
import Styles from "./CartSummary.module.css";
type CarSummaryProps = {
  cartItems: Product[];
  total: number;
  freight: number;
} & CartActionsProps;
const CartSummary = ({
  cartItems,
  total,
  freight,
  handleRedirect,
  onPayment,
}: CarSummaryProps) => (
  <div className={Styles.cartSummary}>
    <Typography variantStyle="heading-small">Sumário</Typography>
    <div className={Styles.discount}>
      <Field
        label="Cupom de desconto"
        inputId="cupom"
        inputPlaceholder="Digite o cupom"
        buttonText="Ok"
        onButtonClick={() => {}}
        onChange={() => {}}
      />
    </div>
    <div className={Styles.summaryResume}>
      <Typography variantStyle="body-small-bold">
        {cartItems.length} Produtos
      </Typography>
      <Typography variantStyle="body-small-bold">R$ {total}</Typography>
      <Typography variantStyle="body-small-bold">Frete:</Typography>
      <Typography variantStyle="body-small-bold">R$ {freight}</Typography>
    </div>
    <Divider style={{ borderColor: "#780BF7" }} />
    <div className={Styles.total}>
      <Typography variantStyle="body-large-bold">Total:</Typography>
      <Typography variantStyle="body-large-bold">
        R$ {total + freight}
      </Typography>
    </div>
    <CartActions handleRedirect={handleRedirect} onPayment={onPayment} />
  </div>
);
export default CartSummary;
