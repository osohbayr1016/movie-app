import { Film, Mail, Phone } from "lucide-react"

export const FooterSection = () => {
    return (
        <div className="bg-[#4338CA] h-[280px] text-[#fafafa] py-[40px] flex  justify-between mt-[100px] w-full flex-col sm:flex-row">
        <div className="flex-col flex gap-[12px] w-full">
          <div className="flex gap-[8px] w-full">
            <Film />
            Movie Z
          </div>
          <div>
            <p>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>
        {/* <div className="flex-row gap-[96px] sm:flex-col"> */}
        <div className="flex flex-col gap-[12px] w-full">
          <div className="">
            <div>
              <p>Contact Information</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[24px] pt-[12px] w-full">
              <div className="">
                <div>
                  <Mail />
                </div>
              </div>
              <div>
                <div>
                  <p>Email:</p>
                  <p>Support@MovieZ.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[12px] w-full">
              <div>
                <Phone />
              </div>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div>
            <p>Follow us</p>
          </div>
          <div className="gap-[12px] flex w-full flex-col sm:flex-row">
            <button>Facebook</button>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Youtube</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    )
}