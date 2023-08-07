import Image from "next/image";

/*
The logo with eyes that follow the mouse
 */

export default function Robot() {
    return (
        <div className="flex justify-center robotcontainer">
            <Image src="/logonoeyes.png" alt="" width="400" height="400" className="pixelart absolute robot " id="anchor" />
            <script src="/robot.js"></script>
            <div className="eyes">
                <Image src="/eye.png" alt="" width="200" height="200" className="pixelart absolute eye right" />
                <Image src="/eye.png" alt="" width="200" height="200" className="pixelart absolute eye left" />
            </div>
        </div>
    )
}
