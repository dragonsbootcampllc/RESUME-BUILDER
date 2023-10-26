import { Margin, usePDF } from "react-to-pdf";


function DownlodButton() {

  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM }
  });


  return (
      <button onClick={toPDF} className="bg-white hover:bg-wihte-900 text-black  py-2 px-2 rounded-full " ><svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
  </svg>Download PDF</button>
  );
}
export default  DownlodButton;
