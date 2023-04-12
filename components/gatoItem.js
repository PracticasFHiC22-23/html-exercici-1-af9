export default {
  props: {
    gato: Object,
  },

  template: `
    <tr>
        <td> {{ gato.name }}</td>
        <td> {{ gato.age }} </td>
    </tr>
  `,
};
