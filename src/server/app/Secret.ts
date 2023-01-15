// @filename: Secret.ts

import { Password } from "../../client";

class Secret extends Password {
    /** @type { string } - The public secret that the tokens are signed for. */
    static password: string;

    /**
     *  Unlike the Password class, with this you cannot insert some Array to instantiate the class since this is
     *  private. This behauvior is necessary to freeze the Object that will be emitted.
     *  @param hashBuffer @type { ArrayBuffer } - This is the Buffer returned by the SHA-256 digested data.
     */
    private constructor(hashBuffer: ArrayBuffer) {
        super(hashBuffer);
    }
    
    /**
     *  The method that converts your raw secret to ArrayBuffer and call the class itself.
     *  @param rawsecret @type{ string } - This is your password that no one should see.
     *  @returns @type { Password } - The public password.
     */
    static async define(rawsecret: string) {
        return Object.freeze(await super.define(rawsecret) as Secret)
    }
}

export {
    Secret
}